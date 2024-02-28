# comes with Python! :)
import sqlite3

# This connects us to the database
CONN = sqlite3.connect('development.db')
# this creates a tool where we can talk to the database
CURSOR = CONN.cursor()