<?php

namespace App\Exceptions;

use App\Http\Controllers\BaseController;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Foundation\Http\Exceptions\MaintenanceModeException;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Auth\AuthenticationException;
use Throwable;

/**
 * Class Handler
 * @author karam mustafa
 * @package App\Exceptions
 */
class Handler extends ExceptionHandler
{
    protected $notFoundResponse = [
        'data' => 'null',
        'message' => 'cant find this element please make sure you chose right element',
        'error' => true,
        'status' => 404,
        'notification' => "stopped if something went wrong",
    ];
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * @param Throwable $exception
     * @author karam mustafa
     */
    function logAnException(\Throwable $exception)
    {
        $exceptionFormat = "\nAppName-EXCEPTION \nMESSAGE:: %s \nFILE:: %s \nLINE::%s \n\n";
        Log::info(sprintf($exceptionFormat,
            // some exceptions don't come with a message
            !empty(trim($exception->getMessage()))
                ? $exception->getMessage()
                : get_class($exception),
            $exception->getFile(),
            $exception->getLine()
        ));
    }

    /**
     * Report or log an exception.
     *
     * @param \Throwable $exception
     * @return void
     *
     * @throws \Exception
     * @throws Throwable
     */
    public function report(Throwable $exception)
    {
        $this->logAnException($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Throwable $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof MaintenanceModeException) {
            throw new  PublicException(myTrans('system_update_please_wait'), 400);
        }
        if ($exception instanceof MethodNotAllowedHttpException) {
            throw new  PublicException(myTrans('method_not_allowed'), 405);
        }
        if ($exception instanceof NotFoundHttpException) {
            return response($this->notFoundResponse, $this->notFoundResponse['status']);
        }
        if ($exception instanceof ModelNotFoundException) {
            return response($this->notFoundResponse, $this->notFoundResponse['status']);
        }
        if ($exception instanceof AuthorizationException) {
            $message = $exception->getMessage();
            if ($message == 'This action is unauthorized.') {
                $message = myTrans('unauthorized_message');
            }
            throw new  PublicException($message, 401);
        }
        if ($exception instanceof \BadMethodCallException) {
            throw new  PublicException($exception->getMessage(), 500);
        }
        if ($exception instanceof PublicException) {
            $status = 400;
            if ($exception->getCode() != 0) $status = $exception->getCode();
            return (new BaseController())->getResponse(null, $exception->getMessage(), true, $status);
        }
        return parent::render($request, $exception);
    }

    /**
     * Convert an authentication exception into a response.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Auth\AuthenticationException $exception
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws PublicException
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        throw new  PublicException(myTrans('user_dosent_login'), 401);
    }
}
