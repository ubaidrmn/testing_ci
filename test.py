from app import sub, add

def test():
	assert sub(1,1) == 0
	assert add(1,1) == 2

if __name__ == '__main__':
	test()
