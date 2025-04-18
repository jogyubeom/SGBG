package com.singlebungle.backend.global.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseResponseBody {
    String message = null;
    Integer statusCode = null;

    private BaseResponseBody() {
    }

    private BaseResponseBody(Integer statusCode) {
        this.statusCode = statusCode;
    }

    private BaseResponseBody(Integer statusCode, String message) {
        this.statusCode = statusCode;
        this.message = message;
    }

    public static BaseResponseBody of(Integer statusCode, String message) {
        BaseResponseBody body = new BaseResponseBody();
        body.message = message;
        body.statusCode = statusCode;
        return body;
    }


}
