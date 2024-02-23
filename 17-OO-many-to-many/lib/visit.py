class Visit:
    all = []

    def __init__(self, museum, visitor, date):
        self.museum = museum
        self.visitor = visitor
        self.date = date
        Visit.all.append(self)

    @property
    def museum(self):
        return self._museum

    @museum.setter 
    def museum(self, new_museum):
        from lib.museum import Museum
        if isinstance(new_museum, Museum):
            self._museum = new_museum
        else:
            raise TypeError("the museum must be an instance of Museum")

    @property
    def visitor(self):
        return self._visitor

    @visitor.setter 
    def visitor(self, new_visitor):
        from lib.visitor import Visitor
        if isinstance(new_visitor, Visitor):
            self._visitor = new_visitor
        else:
            raise TypeError("the visitor must be an instance of Visitor")

    def __repr__(self):
        return f'<Visit date="{self.date}" visitor_name="{self.visitor.full_name()}" museum_name="{self.museum.name}" >'