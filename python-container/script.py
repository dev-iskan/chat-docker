def draw_tree(height):
    for i in range(height):
        print(' ' * (height - i - 1) + '*' * (2 * i + 1))
    print(' ' * (height - 1) + '|')

if __name__ == "__main__":
    height = 5
    draw_tree(height)