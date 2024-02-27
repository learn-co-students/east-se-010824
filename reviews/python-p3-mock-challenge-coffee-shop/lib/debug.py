#!/usr/bin/env python3
import ipdb

from classes.many_to_many import Customer
from classes.many_to_many import Order
from classes.many_to_many import Coffee

if __name__ == '__main__':
    print("HELLO! :) let's debug")
    c1 = Customer("Emiley")
    c2 = Customer("Conner")
    cof1 = Coffee("Mocha")
    cof2 = Coffee("Iced Coffee")
    o1 = Order(c1, cof1, 5.50)
    o2 = Order(c1, cof2, 3.30)
    o3 = Order(c2, cof1, 3.50)
    o4 = Order(c1, cof1, 5.50)

    # 14.30/3
    ipdb.set_trace()
