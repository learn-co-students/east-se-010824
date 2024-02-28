from models.__init__ import CONN, CURSOR

class Coffee:
    def __init__(self, name, id=None):
        self.name = name
        self.id = id

    def __repr__(self):
        return f"<Coffee id={self.id} name={self.name}>"