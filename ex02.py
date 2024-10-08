def is_fibonacci(num):
    a, b = 0, 1
    if num < 0:
        return False
    while b < num:
        a, b = b, a + b
    return b == num

num = int(input("Digite um número: "))

if is_fibonacci(num):
    print(f"O número {num} pertence à sequência de Fibonacci.")
else:
    print(f"O número {num} não pertence à sequência de Fibonacci.")
