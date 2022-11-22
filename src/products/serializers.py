from rest_framework import serializers

from .models import Item, Sale


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'nome','description', 'price')



class SaleSerializer(serializers.ModelSerializer):
    items = ProductSerializer(many=True, read_only=True)
    
    class Meta:
        model = Sale
        fields = ('id', 'items','total')
        read_only_fields= ['total']