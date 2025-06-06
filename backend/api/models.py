from django.db import models

class ShapeData(models.Model):
    name = models.CharField(max_length=100)
    shape = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
