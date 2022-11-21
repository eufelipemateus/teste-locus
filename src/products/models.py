from django.db import models

# Create your models here.
class Items(models.Model):
  nome = models.TextField(max_length=100)
  description = models.TextField(max_length=150)
  price = models.DecimalField(max_digits=10, decimal_places=2)



class Vendas(models.Model):
  nome = models.TextField(max_length=100)
  description = models.TextField(max_length=150)
  price = models.DecimalField(max_digits=10, decimal_places=2)
