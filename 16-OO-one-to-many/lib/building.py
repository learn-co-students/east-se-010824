from lib.apartment import Apartment

class Building:
    all = []

    def __init__(self, name):
        self.name = name
        Building.all.append(self)

    def apartments(self):
        # apts = []
        # for apartment in Apartment.all:
        #     if apartment.building == self:
        #         apts.append(apartment)

        # return apts
        return [apartment for apartment in Apartment.all if apartment.building == self]

    def add_apartment(self, number, floor):
        return Apartment(number, floor, self)

    def __repr__(self):
        return f'<Building name="{self.name}">'