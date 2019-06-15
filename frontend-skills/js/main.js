webpackJsonp([0],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(131);

/**
 * Анимация заполнения бланка
 */
function fillFormAnimate() {
	var elements = document.querySelectorAll('.info__sheet_item_text span');
	var hold = 1000;

	var _loop = function _loop(index) {
		var element = elements[index];
		var lastWidth = element.offsetWidth;

		element.style.width = '0';
		element.style.opacity = '1';
		element.style.transition = 'width ' + hold + 'ms linear';

		setTimeout(function () {
			element.style.width = lastWidth + 'px';
		}, index * hold);
	};

	for (var index = elements.length - 1; index >= 0; index--) {
		_loop(index);
	}
}

/**
 * Анимация отметки умений
 */
function checkboxAnimate() {
	var elements = document.querySelectorAll('.checkbox.chek-it');
	var hold = 500;

	var _loop2 = function _loop2(index) {
		var element = elements[index];

		setTimeout(function () {
			element.classList.add('cheked');
		}, index * hold);
	};

	for (var index = elements.length - 1; index >= 0; index--) {
		_loop2(index);
	}
}

/**
 * Анимация для секции "Мой уровень владения JavaScript"
 * @param {number} totalPercent  Уровень владения JS в процентах, целое число от 0 до 100
 * @param {boolean} offScale     Эффект зашкаливания значений, логический тип
 */
function jsSkillAnimate(totalPercent) {
	var offScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var elementСounter = document.querySelector('.skillJs__counter');
	var elementArrow = document.querySelector('.skillJs__meter_arrow');
	var elementWarning = document.querySelector('.skillJs__warning');
	var colorYellow = '#ffc814',
	    colorGreen = '#a3cd3b',
	    colorBlue = '#0093d7';

	var countMin = 0;
	var countMax = 999;
	var count = Number(elementСounter.innerHTML);
	var percent = count / countMax * 100;
	var degMin = -30;
	var degMax = 160;
	var deg = percent * 180 / 100 + degMin;
	var delay = 10;

	// Эффект зашкаливания
	if (offScale && percent >= totalPercent) {
		count -= 20;
		elementСounter.innerHTML = count;
		if (percent > 80) {
			elementWarning.innerHTML = 'Слишком большое ЧСВ!!!';
		}
	} else {
		elementWarning.innerHTML = '';
	}

	// Не допускаем выхода за допустимые пределы
	if (count < countMin) {
		count = countMin - 1;
	} else if (count > countMax) {
		count = countMax;
	}

	if (deg < degMin) {
		deg = degMin;
	} else if (deg > degMax) {
		deg = degMax;
	}

	// Обновление значений счетчика баллов и отклонения стрелки
	count++;
	elementСounter.innerHTML = count;
	elementArrow.setAttribute('transform', 'rotate(' + deg + ', 130, 124)');

	// Установка цвета для счетчика баллов
	if (percent > 0 && percent < 33) {
		elementСounter.style.color = colorYellow;
	} else if (percent > 33 && percent < 66) {
		elementСounter.style.color = colorGreen;
	} else {
		elementСounter.style.color = colorBlue;
	}

	// Рекурсия
	if (percent - 1 <= totalPercent && percent >= 0 && percent <= 100) {
		setTimeout(jsSkillAnimate, delay, totalPercent, offScale);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	setTimeout(fillFormAnimate, 1000);
	setTimeout(checkboxAnimate, 7000);
	setTimeout(jsSkillAnimate, 13000, 100, true);
});

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(132);

var _svg4everybody = __webpack_require__(334);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

__webpack_require__(335);

/***/ })

},[130]);
//# sourceMappingURL=main.js.map