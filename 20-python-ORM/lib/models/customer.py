from models.__init__ import CONN, CURSOR
import ipdb
class Customer:
    def __init__(self, name, joined, birthday, id=None):
        self.name = name
        self.joined = joined
        self.birthday = birthday
        self.id = id

    def __repr__(self):
        return f"<Customer id={self.id} name={self.name} joined={self.joined} birthday={self.birthday}>"

    @classmethod
    def instance_from_db(cls, row):
        return cls(row[1], row[2], row[3], row[0])

    @classmethod
    def find_by_id(cls, id):
        sql = """
            SELECT * FROM customers
            WHERE id = ?
        """
        row = CURSOR.execute(sql, (id,)).fetchone()
        return cls.instance_from_db(row)

    def update(self):
        sql = """
            UPDATE customers
            SET name = ?, joined = ?, birthday = ?
            WHERE id = ?
        """

        CURSOR.execute(sql, (self.name, self.joined, self.birthday, self.id,))
        CONN.commit()

    def average_order_price(self):
        sql = """
            SELECT AVG(coffees.price) FROM coffees
            JOIN orders ON orders.coffee_id = coffees.id
            JOIN customers ON customers.id=orders.customer_id
            WHERE customers.id=?
            GROUP BY orders.customer_id;
        """

        row = CURSOR.execute(sql, (self.id, )).fetchone()
        return row[0] if row else 0