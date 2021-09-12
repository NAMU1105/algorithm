# 동적 계획법(dynmic programming)

A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

문제를 더 작은 문제로 나누고, 이미 답을 구한 작은 문제의 답은 저장해 둔뒤, 같은 문제를 마주했을 때
다시 연산을 통해 해당 값을 구하는 것이 아닌
이미 구해둔 답을 꺼내어 사용하여 연산 시간을 줄이는 방법이다.

해당 방법을 이용하여 풀 수 있는 대표적인 문제는 피보나치 수열이 있다.
