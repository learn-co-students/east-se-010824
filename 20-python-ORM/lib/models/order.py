from models.__init__ import CONN, CURSOR

class Order:
    def __init__(self, customer_id, coffee_id, id=None):
        self.customer_id = customer_id
        self.coffee_id = coffee_id
        self.id = id

    def __repr__(self):
        return f"<Order id={self.id} customer_id={self.customer_id} coffee_id={self.coffee_id}>"