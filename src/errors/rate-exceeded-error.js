'use strict'

class RateExceededError extends Error {

    constructor(message) {
        super(message)
        this.message = message
    }
}

module.exports = RateExceededError