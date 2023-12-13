/**
 * @license MIT
 * @author codewithsadee <olimjon.coder@gmail.com>
 * @copyright O.Olimjon 2023
 */


'use strict';

export async function fetchData(url, successCallback, errorCallback) {
    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json();
        successCallback(data)
    } else {
        const error = await response.json()
        errorCallback && errorCallback(error)
    }
}



