class Pet:
    all = []

    def __init__(self, breed, name):
        self.breed = breed
        self.name = name
        self.age = 0
        Pet.all.append(self)

    @classmethod
    def count(cls):
        return len(cls.all) 

    @classmethod
    def names(cls):
        return [pet.name for pet in cls.all]

    def speak(self):
        print(f'{self.name} says hello')

    def get_breed(self):
        return self._breed

    def set_breed(self, new_breed):
        if not hasattr(self, '_breed'):
            self._breed = new_breed
    
    breed = property(get_breed, set_breed)

    @property
    def age(self):
        return self._age

    @age.setter 
    def age(self, new_age):
        if type(new_age) == int:
            self._age = new_age
        else:
            raise ValueError('age must be an integer')

    def __repr__(self):
        return f'<Pet name={self.name} breed={self.breed} age={self.age}>'



# 1. create Owner class
    # relate pet to owner
    # create relationships



# 2. refactor classes into own files