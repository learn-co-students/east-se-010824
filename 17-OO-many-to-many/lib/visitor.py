class Visitor:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def full_name(self):
        return f'{self.first_name} {self.last_name}'

    def visits(self):
        from lib.visit import Visit
        return [visit for visit in Visit.all if visit.visitor == self]

    def museums(self):
        return [visit.museum for visit in self.visits()]

    def __repr__(self):
        return f'<Visitor name="{self.full_name()}">'


