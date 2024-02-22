import ipdb
from lib.building import Building
from lib.apartment import Apartment

b1 = Building("The Hampton")
b2 = Building("Dunster")
a1 = Apartment(100, 1, b1)
a2 = Apartment(20, 2, b2)

# print()
# ipdb.set_trace()