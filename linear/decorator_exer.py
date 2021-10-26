def deco(func):
    def wrapper(*args):
        print('hello')
        func(*args)
        print('well done')
    return wrapper


@deco
def hi(hello):
    print(f'this is {hello} world')


hi('hello')