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


class Apartment:
    all = []
    def __init__(self, number, floor, building_instance):
        self.number = number
        self.floor = floor
        self.building = building_instance
        Apartment.all.append(self)

    def get_number(self):
        return self._number

    def set_number(self, new_number):
        if type(new_number) == int:
            self._number = new_number
        else:
            raise TypeError('Apartment number must be an integer.')

    number = property(get_number, set_number)

    @property
    def building(self):
        return self._building

    @building.setter
    def building(self, building_instance):
        # if type(building_instance) == Building:
        if isinstance(building_instance, Building):
            self._building = building_instance
        else:
            raise TypeError("Building must be a building instance.")

    def __repr__(self):
        return f'<Apartment num={self.number} floor={self.floor} building_name="{self.building.name}">'

# b1 = Building("The Hampton")
# b2 = Building("Dunster")
# a1 = Apartment(100, 1, b1)
# a2 = Apartment(20, 2, b2)
# b1.add_apartment(101, 1)


# 2. refactor classes into own files