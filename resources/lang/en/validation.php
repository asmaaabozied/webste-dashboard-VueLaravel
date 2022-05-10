<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'The :attribute must be accepted.',
    'active_url' => 'The :attribute is not a valid URL.',
    'after' => 'The :attribute must be a date after :date.',
    'after_or_equal' => 'The :attribute must be a date after or equal to :date.',
    'alpha' => 'The :attribute may only contain letters.',
    'alpha_dash' => 'The :attribute may only contain letters, numbers, dashes and underscores.',
    'alpha_num' => 'The :attribute may only contain letters and numbers.',
    'array' => 'The :attribute must be an arabicray.',
    'before' => 'The :attribute must be a date before :date.',
    'before_or_equal' => 'The :attribute must be a date before or equal to :date.',
    'between' => [
        'numeric' => 'The :attribute must be between :min and :max.',
        'file' => 'The :attribute must be between :min and :max kilobytes.',
        'string' => 'The :attribute must be between :min and :max characters.',
        'array' => 'The :attribute must have between :min and :max items.',
    ],
    'boolean' => 'The :attribute field must be true or false.',
    'confirmed' => 'The :attribute confirmation does not match.',
    'date' => 'The :attribute is not a valid date.',
    'date_equals' => 'The :attribute must be a date equal to :date.',
    'date_format' => 'The :attribute does not match the format :format.',
    'different' => 'The :attribute and :other must be different.',
    'digits' => 'The :attribute must be :digits digits.',
    'digits_between' => 'The :attribute must be between :min and :max digits.',
    'dimensions' => 'The :attribute has invalid image dimensions.',
    'distinct' => 'The :attribute field has a duplicate value.',
    'email' => 'The :attribute must be a valid email address.',
    'ends_with' => 'The :attribute must end with one of the following: :values.',
    'exists' => 'The selected :attribute is invalid.',
    'file' => 'The :attribute must be a file.',
    'filled' => 'The :attribute field must have a value.',
    'gt' => [
        'numeric' => 'The :attribute must be greater than :value.',
        'file' => 'The :attribute must be greater than :value kilobytes.',
        'string' => 'The :attribute must be greater than :value characters.',
        'array' => 'The :attribute must have more than :value items.',
    ],
    'gte' => [
        'numeric' => 'The :attribute must be greater than or equal :value.',
        'file' => 'The :attribute must be greater than or equal :value kilobytes.',
        'string' => 'The :attribute must be greater than or equal :value characters.',
        'array' => 'The :attribute must have :value items or more.',
    ],
    'image' => 'The :attribute must be an image.',
    'in' => 'The selected :attribute is invalid.',
    'in_array' => 'The :attribute field does not exist in :other.',
    'integer' => 'The :attribute must be an integer.',
    'ip' => 'The :attribute must be a valid IP address.',
    'ipv4' => 'The :attribute must be a valid IPv4 address.',
    'ipv6' => 'The :attribute must be a valid IPv6 address.',
    'json' => 'The :attribute must be a valid JSON string.',
    'lt' => [
        'numeric' => 'The :attribute must be less than :value.',
        'file' => 'The :attribute must be less than :value kilobytes.',
        'string' => 'The :attribute must be less than :value characters.',
        'array' => 'The :attribute must have less than :value items.',
    ],
    'lte' => [
        'numeric' => 'The :attribute must be less than or equal :value.',
        'file' => 'The :attribute must be less than or equal :value kilobytes.',
        'string' => 'The :attribute must be less than or equal :value characters.',
        'array' => 'The :attribute must not have more than :value items.',
    ],
    'max' => [
        'numeric' => 'The :attribute may not be greater than :max.',
        'file' => 'The :attribute may not be greater than :max kilobytes.',
        'string' => 'The :attribute may not be greater than :max characters.',
        'array' => 'The :attribute may not have more than :max items.',
    ],
    'mimes' => 'The :attribute must be a file of type: :values.',
    'mimetypes' => 'The :attribute must be a file of type: :values.',
    'min' => [
        'numeric' => 'The :attribute must be at least :min.',
        'file' => 'The :attribute must be at least :min kilobytes.',
        'string' => 'The :attribute must be at least :min characters.',
        'array' => 'The :attribute must have at least :min items.',
    ],
    'not_in' => 'The selected :attribute is invalid.',
    'not_regex' => 'The :attribute format is invalid.',
    'numeric' => 'The :attribute must be a number.',
    'password' => 'The password is incorrect.',
    'present' => 'The :attribute field must be present.',
    'regex' => 'The :attribute format is invalid.',
    'required' => 'The :attribute field is required.',
    'required_if' => 'The :attribute field is required when :other is :value.',
    'required_unless' => 'The :attribute field is required unless :other is in :values.',
    'required_with' => 'The :attribute field is required when :values is present.',
    'required_with_all' => 'The :attribute field is required when :values arabice present.',
    'required_without' => 'The :attribute field is required when :values is not present.',
    'required_without_all' => 'The :attribute field is required when none of :values arabice present.',
    'same' => 'The :attribute and :other must match.',
    'size' => [
        'numeric' => 'The :attribute must be :size.',
        'file' => 'The :attribute must be :size kilobytes.',
        'string' => 'The :attribute must be :size characters.',
        'array' => 'The :attribute must contain :size items.',
    ],
    'starts_with' => 'The :attribute must start with one of the following: :values.',
    'string' => 'The :attribute must be a string.',
    'timezone' => 'The :attribute must be a valid zone.',
    'unique' => 'The :attribute has already been taken.',
    'uploaded' => 'The :attribute failed to upload.',
    'url' => 'The :attribute format is invalid.',
    'uuid' => 'The :attribute must be a valid UUID.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines arabice used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        "name" => "name",
        "username" => "username",
        "email" => "email",
        "first_name" => "first name",
        "last_name" => "last name",
        "password" => "password",
        "password_confirmation" => "password confirmation",
        "city" => "city",
        "country" => "country",
        "address" => "address",
        "phone" => "phone",
        "mobile" => "mobile",
        "age" => "age",
        "sex" => "sex",
        "gender" => "gender",
        "day" => "day",
        "month" => "month",
        "year" => "year",
        "hour" => "hour",
        "minute" => "minute",
        "second" => "second",
        "title" => "title",
        "content" => "content",
        "excerpt" => "excerpt",
        "date" => "date",
        "time" => "time",
        "available" => "available",
        "size" => "size",
        "purchases" => "purchases",
        "bar_code" => "bar code",
        "measure " => "measure ",
        "fee_id" => "fee id",
        "fee_amount" => "fee amount",
        "start_date" => "start date",
        "end_date" => "end date",
        "main_title" => "main title",
        "sub_title" => "sub title",
        "isEnabled" => "isEnabled",
        "start_time" => "start time",
        "end_time" => "end time",
        "duration" => "duration",
        "date_start" => "date start",
        "date_end" => "date end",
        "user_id" => "user id",
        "radius" => "radius",
        "car_kind" => "car kind",
        "palette_number" => "palette number",
        "paymentId" => "paymentId",
        "transaction_id" => "transaction id",
        "confirmation_key" => "confirmation key",
        "name_en" => "name en",
        "content_ar" => "content arabic",
        "content_en" => "content en",
        "pageOrder" => "pageOrder",
        "branch_id" => "branch id",
        "is_booked" => "is booked",
        "id" => "id",
        "from" => "from",
        "to" => "to",
        "day_off" => "day off",
        "role" => "role",
        "lang" => "lang",
        "employee_id" => "employee id",
        "cart_id" => "cart id",
        "discount_code" => "discount code",
        "payment_method" => "payment method",
        "delivery_method" => "delivery method",
        "service_quality_rating" => "service quality rating",
        "employee_rating" => "employee rating",
        "service_price_rating" => "service price rating",
        "service_speed_rating" => "service speed rating",
        "comment" => "comment",
        "model_code" => "model code",
        "name_ar" => "name arabic",
        "description_ar" => "description arabic",
        "quantity" => "quantity",
        "product_category_id" => "product category id",
        "offerType" => "offerType",
        "offer_rateOrAmount" => "offer rateOrAmount",
        "date_time" => "date time",
        "text" => "text",
        "customer_id" => "customer id",
        "nationality" => "nationality",
        "department_id" => "department id",
        "car_id" => "car id",
        "user_name" => "user name",
        "image" => "image",
        "image.*" => "image.*",
        "message_id" => "message id",
        "order_id" => "order id",
        "maintenance_order_id" => "maintenance order id",
        "InvoiceAmount" => "InvoiceAmount",
        "CurrencyIso" => "CurrencyIso",
        "manufacturer" => "manufacturer",
        "code" => "code",
        "price" => "price",
        "device_type" => "device type",
        "manufacture" => "manufacture",
        "lat" => "lat",
        "lon" => "lon",
        "description" => "description",
        "warranty_image" => "warranty image",
        "appointment_id" => "appointment id",
        "fix_place" => "fix place",
        "has_image" => "has image",
        "images.*" => "images",
    ],

];
