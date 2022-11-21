from rest_framework import serializers

from .models import Items


class ProductSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Items
        fields = ('id', 'nome','description', 'price')




class SaleSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Items
        fields = ('id', 'nome','description', 'price')