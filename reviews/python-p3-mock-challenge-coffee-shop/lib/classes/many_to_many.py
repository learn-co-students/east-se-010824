class Coffee:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        if not hasattr(self, "_name"):
            if type(new_name) == str:
                if len(new_name) >= 3:
                    self._name = new_name
                else:
                    raise ValueError("Name must be at least 3 characters")
            else:
                raise TypeError("Name must be a string")
        else:
            raise AttributeError("Name cannot be changed")
        
    def orders(self):
        return [order for order in Order.all if order.coffee == self]
    
    def customers(self):
        return list({order.customer for order in self.orders()})
    
    def num_orders(self):
        return len(self.orders())
    
    def average_price(self):
        total_price = sum([order.price for order in self.orders()])
        return total_price / self.num_orders()

    def __repr__(self):
        return f'<Coffee name="{self.name}">'

class Customer:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        if isinstance(new_name, str):
            if 1 <= len(new_name) <= 15:
                self._name = new_name
            else:
                raise ValueError("Name must be between 1 and 15 characters")
        else:
            raise TypeError("Name must be a string")
        
    def orders(self):
        return [order for order in Order.all if order.customer == self]
    
    def coffees(self):
        return list({order.coffee for order in self.orders()})
    
    def create_order(self, coffee, price):
        return Order(self, coffee, price)

    def __repr__(self):
        return f'<Customer name="{self.name}">'
    
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

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, new_price):
        if hasattr(self, "_price"):
            raise AttributeError("Price has already been set")
        else:
            if isinstance(new_price, float):
                if 1.0 <= new_price <= 10.0:
                    self._price = new_price
                else:
                    raise ValueError("Price must be between 1 and 10 dollars")
            else:
                raise TypeError("Price must be a float")

    @property
    def customer(self):
        return self._customer

    @customer.setter
    def customer(self, new_customer):
        if isinstance(new_customer, Customer):
            self._customer = new_customer
        else:
            raise TypeError("Customer must be an instance of Customer")

    @property
    def coffee(self):
        return self._coffee

    @coffee.setter
    def coffee(self, new_coffee):
        if isinstance(new_coffee, Coffee):
            self._coffee = new_coffee
        else:
            raise TypeError("Coffee must be of type Coffee")

    def __repr__(self):
        return f'<Order price="{self.price}" coffee="{self.coffee.name}" customer="{self.customer.name}">'