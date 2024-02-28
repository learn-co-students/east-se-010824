from models.__init__ import CONN, CURSOR

class Coffee:
    def __init__(self, name, price, id=None):
        self.name = name
        self.price = price
        self.id = id

    def __repr__(self):
        return f"<Coffee id={self.id} name={self.name}>"

    @classmethod
    def instance_from_db(cls, row):
        return cls(row[1], row[2], row[0])

    @classmethod
    def find_by_name(cls, name):
        sql = """
            SELECT * FROM coffees
            WHERE name = ?
        """

        row = CURSOR.execute(sql, (name,)).fetchone()
        return cls.instance_from_db(row)