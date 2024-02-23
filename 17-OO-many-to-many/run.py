#!/usr/bin/env python3
    # above tells the command line that 
    # this program should be executed using 
    # Python 3 interpreter
    # `chmod +x run.py` to make the script executable

from lib.visit import Visit
from lib.museum import Museum
from lib.visitor import Visitor

m1 = Museum("Botanical Gardens")
m2 = Museum("The Met")

visitor_1 = Visitor("Emiley", "Palmquist")
visitor_2 = Visitor("Conner", "Paradiso")


Visit(m1, visitor_1, "January 10, 2023")
Visit(m1, visitor_2, "January 10, 2023")
Visit(m2, visitor_1, "January 11, 2023")



if __name__ == '__main__':
    # should only execute this code if file called 
    # from the command line

    user_input = input('Input something: ')
    print(user_input)
    name = input('Enter a museum name')
    print(name)
    # find existing museum with that name or create a new one :)