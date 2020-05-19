/**
 * Finds DOM element
 * @param {HTMLElement, String} el
 * @param {Document|HTMLElement} [context=document]
 */
export function getEl (el, context=document) {
    return typeof el === 'string'
        ? context['querySelector'](el)
        : el;
}

/**
 * Creates HTML DOM element
 * @param {String} [tagName] - element's tag name
 * @param {String} [className]
 * @param {String} [innerHtml]
 * @param {String} [id]
 * @param {Object} [attrs]
 * @returns {HTMLElement}
 */
export function createElement({tagName='div', className='', innerHtml='', id='', attrs={}} = {}) {
    let $element = document.createElement(tagName);
    if (className) $element.classList.add(...className.split(' '));
    if (id) $element.id = id;

    if (innerHtml) {
        $element.innerHTML = innerHtml;
    }

    if (attrs) {
        for (let attr in attrs) {
            $element.setAttribute(attr, attrs[attr]);
        }
    }

    return $element;
}

/**
 * Inserts newElement after targetElement
 * @param {HTMLElement} newElement - element to be inserted
 * @param {HTMLElement} targetElement - after which must be inserted
 * @return {HTMLElement} newElement
 */
export function insertAfter(newElement, targetElement) {
    targetElement.parentNode
        .insertBefore(newElement, targetElement.nextSibling);
    return newElement;
}

/**
 * Makes object deep copy
 * @param {Object} obj
 * @return {Object}
 */
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Calculates amount of days in passed date
 * @param {Date} date
 * @return {number}
 */
export function getDaysCount(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

/**
 * Get detailed date object
 * @param {Date} date
 * @return {{
 *  date: number,
 *  hours: number,
 *  fullDate: (string|*),
 *  month: number,
 *  fullHours: (string|*),
 *  year: number,
 *  minutes: number,
 *  fullMonth: string,
 *  day: number,
 *  fullMinutes: (string|*)
 * }}
 */
export function getParsedDate(date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        fullMonth: (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1, // One based
        date: date.getDate(),
        fullDate: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
        day: date.getDay(),
        hours: date.getHours(),
        fullHours:  date.getHours() < 10 ? '0' + date.getHours() :  date.getHours() ,
        minutes: date.getMinutes(),
        fullMinutes:  date.getMinutes() < 10 ? '0' + date.getMinutes() :  date.getMinutes()
    };
}

export function subDays(date, days) {
    let {year, month, date: _date} = getParsedDate(date);
    return new Date(year, month, _date - days);
}

export function addDays(date, days) {
    let {year, month, date: _date} = getParsedDate(date);
    return new Date(year, month, _date + days);
}
