let str = `
010-1234-2345
xxx@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
This is a practice to learn javascript and Learn something interesting
`


// const h = `    the hello world    !

// `

// 여기서는 공백을 많이 넣은 변수 하나를 생성했고, 아래에서 replace를 써서 공백을 모두 없애는걸 해봄

// console.log(
//   h.replace(/\s/g, '')
// )


// console.log(
//   str.match(/\bf\w{1,}\b/g)  //f로 시작하는 문자를 1개이상 찾으라는 거
// )

// console.log(
//   str.match(/[가-힣]{1,}/g)
// )

// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

// console.log(
//   str.match(/dog?/gm)

// const regexp = new RegExp('learn', 'g')
// console.log(str.match(regexp))
// 대문자, 소문자 구분해서 결과가 나옴. 이걸 대문자 소문자 구분없이 하려면, g대신 gi 넣으면 된다.


// console.log(regexp.test(str))
//console.log(str.match(/\.$/gim))

//.은 특정 기능으로 해석될 수 있기 때문에 백슬래시 기호를 써줘야 마침표 문자로 인식. 
//gim에서 g는 전체 줄바꿈까지 포함한 문장을 살피는 것. m은 좀 다른 의미로 각 줄바끔을 시작과 끝이 있는 줄로 인식
//하여 하나하나씩 본다는 의미이다. 만약 이 예시에서 m이 없다면, 값은 null이 된다.
//&표시는 .이 문장의 마지막에 붙어 있는 것을 찾아 봔환하라는 것이다.


