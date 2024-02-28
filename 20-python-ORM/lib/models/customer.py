from models.__init__ import CONN, CURSOR

class Customer:
    def __init__(self, name, joined, birthday, id=None):
        self.name = name
        self.joined = joined
        self.birthday = birthday
        self.id = id

    def __repr__(self):
        return f"<Customer id={self.id} name={self.name} joined={self.joined} birthday={self.birthday}>"