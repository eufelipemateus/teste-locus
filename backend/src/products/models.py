from django.db import models

# Create your models here.
class Item(models.Model):
  nome = models.TextField(max_length=100)
  description = models.TextField(max_length=150)
  price = models.DecimalField(max_digits=10, decimal_places=2)

  class Meta:
    ordering = ['nome']

class Sale(models.Model):
  Items = models.ManyToManyField(Item)
  total = models.IntegerField()

  class Meta:
    ordering = ['total']

