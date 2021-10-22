let lis = document.querySelectorAll('ul li')
let buts = document.querySelectorAll('.fruits button')
let leftButton = document.querySelector('.left')
let rightButton = document.querySelector('.right')
let min = document.querySelector('.min')
let max = document.querySelector('.max')
let stakes = document.querySelectorAll('.stake div')
let start = document.querySelector('#start')
let cleanscore = document.querySelector('.cleanscore')
let isFirst = true
let luckList = [
	{
		chinese: '大橘子',
		luckId: 6,
		multiplate: 10,
	},
	{
		chinese: '大铃铛',
		luckId: 4,
		multiplate: 10,
	},
	{
		chinese: '小王',
		luckId: 0,
		multiplate: 50,
	},
	{
		chinese: '大王',
		luckId: 0,
		multiplate: 100,
	},
	{
		chinese: '大苹果',
		luckId: 7,
		multiplate: 5,
	},
	{
		chinese: '小苹果',
		luckId: 7,
		multiplate: 2,
	},
	{
		chinese: '大芒果',
		luckId: 5,
		multiplate: 10,
	},
	{
		chinese: '大西瓜',
		luckId: 3,
		multiplate: 20,
	},
	{
		chinese: '小西瓜',
		luckId: 3,
		multiplate: 10,
	},
	{
		chinese: '幸运',
		luckId: 8,
		multiplate: 0,
	},
	{
		chinese: '大苹果',
		luckId: 7,
		multiplate: 5,
	},
	{
		chinese: '小橘子',
		luckId: 6,
		multiplate: 3,
	},
	{
		chinese: '大橘子',
		luckId: 6,
		multiplate: 10,
	},
	{
		chinese: '大铃铛',
		luckId: 4,
		multiplate: 10,
	},
	{
		chinese: '小7',
		luckId: 2,
		multiplate: 10,
	},
	{
		chinese: '大7',
		luckId: 2,
		multiplate: 40,
	},
	{
		chinese: '大苹果',
		luckId: 7,
		multiplate: 5,
	},
	{
		chinese: '小芒果',
		luckId: 5,
		multiplate: 3,
	},
	{
		chinese: '大芒果',
		luckId: 5,
		multiplate: 10,
	},
	{
		chinese: '大双星',
		luckId: 2,
		multiplate: 30,
	},
	{
		chinese: '小双星',
		luckId: 2,
		multiplate: 10,
	},
	{
		chinese: '幸运',
		luckId: 8,
		multiplate: 1,
	},
	{
		chinese: '大苹果',
		luckId: 7,
		multiplate: 5,
	},
	{
		chinese: '小铃铛',
		luckId: 4,
		multiplate: 3,
	},
]
// 每个水果下注的分数
let luckMultilple = [
	{
		luckId: 0,
		multiplte: 0,
	},
	{
		luckId: 1,
		multiplte: 0,
	},
	{
		luckId: 2,
		multiplte: 0,
	},
	{
		luckId: 3,
		multiplte: 0,
	},
	{
		luckId: 4,
		multiplte: 0,
	},
	{
		luckId: 5,
		multiplte: 0,
	},
	{
		luckId: 6,
		multiplte: 0,
	},
	{
		luckId: 7,
		multiplte: 0,
	},
]
// 按照下注的分数渲染到页面上
function luckListDom() {
	luckMultilple.forEach((item, index) => {
		let currentStake
		if (item.multiplte < 10) {
			currentStake = '0' + item.multiplte
		} else {
			currentStake = '' + item.multiplte
		}
		let spans = stakes[index].querySelectorAll('span')
		if (currentStake[0] > 0) {
			spans[0].className = 'number2 is-number-action'
		}
		if (currentStake[1] > 0) {
			spans[1].className = 'number2 is-number-action'
		}
		spans[0].innerText = currentStake[0]
		spans[1].innerText = currentStake[1]
	})
}
// 是否在转动中
let isTruned = false
let isMaxOrmin = false
let selfNumber = {
	leftNumber: 10,
	rightNumber: 10,
}
// 将数字填充到页面上
function setNumber() {
	let leftDom = document.querySelector('.total-left')
	let rightDom = document.querySelector('.total-right')
	leftDom.innerText = selfNumber.leftNumber
	rightDom.innerText = selfNumber.rightNumber
}
// 左右的分数 互转
function leftRight() {
	let isDirection = this.dataset.direction
	// 金额右移
	if (isDirection === 'right') {
		if (selfNumber.leftNumber - 1 < 0) {
			console.log('left 余额不足')
		} else {
			selfNumber.leftNumber = selfNumber.leftNumber - 1
			selfNumber.rightNumber += 1
			setNumber()
		}
	}
	// 金额左移
	if (isDirection === 'left') {
		if (selfNumber.rightNumber - 1 < 0) {
			console.log('right 余额不足')
		} else {
			selfNumber.rightNumber = selfNumber.rightNumber - 1
			selfNumber.leftNumber += 1
			setNumber()
		}
	}
}
// 比大小
function isMaxOrMin() {
	console.log(selfNumber)
	if (isMaxOrmin || selfNumber.leftNumber <= 0) {
		return false
	}
	isMaxOrmin = true
	let centerNumber = document.querySelector('.ismaxormin')
	let size = this.dataset.issize
	// 随机一个数 10 以内的数
	let isRrange
	// 3 秒随机变数字
	let rangeInterval = setInterval(() => {
		isRrange = randomNum(1, 10)
		centerNumber.innerText = isRrange
	}, 70)
	setTimeout(() => {
		clearInterval(rangeInterval)
		isMaxOrmin = false
		// 判断输赢
		console.log(size)
		if (size === 'min') {
			if (isRrange <= 5) {
				selfNumber.leftNumber = selfNumber.leftNumber * 2
			} else {
				selfNumber.leftNumber = 0
			}
		} else {
			if (isRrange > 5) {
				selfNumber.leftNumber = selfNumber.leftNumber * 2
			} else {
				selfNumber.leftNumber = 0
			}
		}
		setNumber()
	}, 3000)
}
;(function () {
	setNumber()
	luckListDom()
})()
// 转盘
lis.forEach((item, index) => {
	if (index <= 6) {
		item.style.left = index * 50 + 'px'
	}
	if (index > 6 && index <= 12) {
		item.style.left = 300 + 'px'
		item.style.top = (index - 6) * 50 + 'px'
	}
	if (index >= 13 && index <= 18) {
		item.style.top = 300 + 'px'
		item.style.left = (18 - index) * 50 + 'px'
	}
	if (index >= 19) {
		item.style.top = (24 - index) * 50 + 'px'
	}
})
// 按键按钮
let butImg = [
	'100.png',
	'sevens.png',
	'stars.png',
	'watermelon.png',
	'smallBell.png',
	'mango.png',
	'orange.png',
	'apple.png',
]
buts.forEach((item, index) => {
	item.style.backgroundImage = `url('./img/${butImg[index]}')`
})
// 计算中奖结果
function resultLuck(endIndex) {
	// 中奖 id
	let winId = luckList[endIndex]['luckId']
	// 中奖倍数
	let winMultiplte = luckList[endIndex]['multiplate']
	// 下注的分数
	let bottomFraction = luckMultilple.find((item) => item.luckId === winId)
	// 中奖的分数
	var winFraction
	if (bottomFraction !== -1) {
		console.log(winMultiplte, bottomFraction['multiplte'])
		winFraction = winMultiplte * bottomFraction['multiplte']
	} else {
		winFraction = 0
	}
	selfNumber.leftNumber = winFraction
	setNumber()
	console.log(winFraction)
}
// 起点格子
let startIndex = 11
// 结束格子
let endIndex = 1
// 0 - 4
// 点击开始
start.addEventListener('click', isLuck)
//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
	switch (arguments.length) {
		case 1:
			return parseInt(Math.random() * minNum + 1, 10)
			break
		case 2:
			return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
			break
		default:
			return 0
			break
	}
}
// 生成随机中奖Index
function isLuck() {
	if (
		!isFirst &&
		luckMultilple.some((item) => {
			return item.multiplte > 0
		})
	) {
		let totalScore = luckMultilple.reduce((total, item) => {
			total += item.multiplte
			return total
		}, 0)
		if (selfNumber.rightNumber - totalScore < 0) {
			return false
		} else {
			selfNumber.rightNumber = selfNumber.rightNumber - totalScore
			setNumber()
		}
	}
	// 将左边的分数转到右边
	if (selfNumber.leftNumber > 0) {
		selfNumber.rightNumber += selfNumber.leftNumber
		selfNumber.leftNumber = 0
		setNumber()
		return false
	}

	if (
		isTruned ||
		luckMultilple.every((item) => {
			return item.multiplte <= 0
		})
	) {
		return false
	}
	isFirst = false
	endIndex = randomNum(0, 23)
	turnFunction()
}
// 滚动格子函数
function turnFunction() {
	isTruned = true
	// 当前的格子
	let currentIndex = startIndex
	// 转速
	let speed = 100
	// 当前转的圈数
	let turnTotal = 0
	let interval = setInterval(turn, speed)
	function turn() {
		// 让动画动起来
		// 1.清除所有格子的 class
		lis.forEach((item) => {
			item.className = ''
		})
		// 2. 通过添加 active 类名 制作出动画
		// 如果 currentIndex 超出了 最大格子数归零 and 统计转的圈数
		if (currentIndex > lis.length - 1) {
			currentIndex = 0
			turnTotal++
		}
		// 2.1 添加当前格子样式 和 后两个格子的样式
		lis[currentIndex].className = 'active'
		if (
			(currentIndex >= 2 && turnTotal <= 3) ||
			(turnTotal >= 1 && turnTotal <= 3)
		) {
			let back1 = currentIndex - 1 === -1 ? 23 : currentIndex - 1

			lis[back1].className = 'active1'
		}
		if (
			(currentIndex >= 3 && turnTotal <= 3) ||
			(turnTotal >= 1 && turnTotal <= 3)
		) {
			let back2 = currentIndex - 2
			if (back2 == -2) {
				back2 = 22
			}
			if (back2 == -1) {
				back2 = 23
			}
			lis[back2].className = 'active2'
		}
		// 3. 控制动画速度
		clearInterval(interval)
		// 3.1缓慢起步
		if (turnTotal == 0) {
			speed = 100 - currentIndex * 4
			// 第一圈最快 20
			if (speed < 20) {
				speed = 20
			}
		}
		// 减速
		let cache = currentIndex + 5
		if (cache > 24) {
			cache = cache - 24
		}
		if (turnTotal >= 4 && cache === endIndex) {
			speed = 100
		}
		// 中奖码 在 0 - 4 转 5 圈 否则转 4圈
		if (endIndex >= 0 && endIndex <= 4) {
			if (turnTotal >= 5 && endIndex === currentIndex) {
				speed = 0
				startIndex = endIndex
				isTruned = false
				resultLuck(endIndex)
			}
		} else {
			if (turnTotal >= 4 && endIndex === currentIndex) {
				speed = 0
				startIndex = endIndex
				isTruned = false
				resultLuck(endIndex)
			}
		}
		if (speed > 0) {
			interval = setInterval(turn, speed)
		}
		currentIndex++
	}
}
function addBet() {
	index = this.dataset.index
	if (
		selfNumber.rightNumber - 1 < 0 ||
		luckMultilple[index]['multiplte'] >= 99
	) {
		return false
	}
	selfNumber.rightNumber -= 1
	luckMultilple[index]['multiplte'] += 1
	setNumber()
	luckListDom()
}
// 下注
buts.forEach((item) => {
	item.addEventListener('click', addBet)
})
// 清分
cleanscore.addEventListener('click', () => {
	luckMultilple.forEach((item) => {
		item.multiplte = 0
	})
	let spans = document.querySelectorAll('.stake span')
	spans.forEach((item) => {
		item.className = ''
	})
	luckListDom()
})
leftButton.addEventListener('click', leftRight)
rightButton.addEventListener('click', leftRight)
min.addEventListener('click', isMaxOrMin)
max.addEventListener('click', isMaxOrMin)
