def run_quickstart():
    #Get text to use
    with open('input1.txt', 'r') as file:
        text = file.read().replace('\n', '')

    words = text.split(".")

    for x in words:
        if(x[:1]==" "):
            x = x[1:]
        print(x)

    outputText = ""
    out = open("output.txt", "w")
    out.close()

def tester():
    word = "test"
    print(word[:1])

if __name__ == '__main__':
    run_quickstart()
    #tester()