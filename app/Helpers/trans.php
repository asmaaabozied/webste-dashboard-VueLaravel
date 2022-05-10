<?php


/**
 * @param string $message
 * @return array|\Illuminate\Contracts\Translation\Translator|string|null
 * @author karam mustafa
 */
function myTrans($message)
{
    $message = trans('response.' . $message) ?? $message;

    $message = htmlentities($message, ENT_QUOTES, "UTF-8");

    return $message;
}
