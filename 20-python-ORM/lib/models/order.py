from models.__init__ import CONN, CURSOR
import ipdb

class Order:
    def __init__(self, customer_id, coffee_id, id=None):
        self.customer_id = customer_id
        self.coffee_id = coffee_id
        self.id = id

    def __repr__(self):
        return f"<Order id={self.id} customer_id={self.customer_id} coffee_id={self.coffee_id}>"

    @classmethod
    def drop_table(cls):
        sql = "DROP TABLE IF EXISTS orders;"
        CURSOR.execute(sql)
        CONN.commit()

    @classmethod
    def create_table(cls):
        """creates table called orders if it doesn't exist"""

        sql = """
            CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY,
            customer_id INTEGER,
            coffee_id INTEGER
            )
        """
        CURSOR.execute(sql)
        CONN.commit()
    
    @classmethod
    def instance_from_db(cls, row):
        return cls(row[1], row[2], row[0])

    @classmethod
    def all(cls):
        sql = """
            SELECT * FROM orders;
        """
        rows = CURSOR.execute(sql).fetchall()
        return [cls.instance_from_db(row) for row in rows]

    def save(self):
        sql = """
            INSERT INTO orders (customer_id, coffee_id)
            VALUES (?,?)
        """
        CURSOR.execute(sql, (self.customer_id, self.coffee_id,))
        CONN.commit()

        self.id = CURSOR.lastrowid

    def destroy(self):
        sql = """
            DELETE FROM orders
            WHERE id = ?
        """
        CURSOR.execute(sql, (self.id, ))
        CONN.commit()