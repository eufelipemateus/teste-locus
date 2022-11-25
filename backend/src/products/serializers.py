from rest_framework import serializers

from .models import Item, Sale


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'nome','description', 'price')


class SaleSerializer(serializers.ModelSerializer):
    Items = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = Sale
        fields = ('id', 'Items','total')
        read_only_fields= ['total', 'Items']