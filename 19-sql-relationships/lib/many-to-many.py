class Coffee:
    def __init__(self, name):
        self.name = name
        
    def orders(self):
        return [order for order in Order.all if order.coffee == self]
    
    def customers(self):
        return list({order.customer for order in self.orders()})


class Customer:
    def __init__(self, name):
        self.name = name
        
    def orders(self):
        return [order for order in Order.all if order.customer == self]
    
    def coffees(self):
        return list({order.coffee for order in self.orders()})

    
class Order:
    all = []

    def __init__(self, customer, coffee, price):
        self.customer = customer
        self.coffee = coffee
        self.price = price
        Order.add_new_order(self)
    
    @classmethod
    def add_new_order(cls, new_instance):
        cls.all.append(new_instance)

