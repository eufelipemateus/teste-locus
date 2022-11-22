from django.shortcuts import render

# Create your views here.


from rest_framework import permissions, renderers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Item, Sale
from .serializers import ProductSerializer, SaleSerializer



class ProductViewSet(viewsets.ModelViewSet):
    """
        CRUD lista de produtos mapeado no banco de dados como item.
    """
    queryset = Item.objects.all()
    serializer_class = ProductSerializer


class  SaleViewSet(viewsets.ModelViewSet):
    """
        CRUD lista de vendas.
    """

    queryset = Sale.objects.all()
    serializer_class = SaleSerializer

    @action(detail=True, renderer_classes=[renderers.JSONRenderer])
    def items(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.items)

    def perform_create(self, serializer):
        Total= 0

        ItemsRequest = self.request.data.get("items", None)

        #print(ItemsRequest)

        ItemsID = [n["id"]  for n in ItemsRequest ]
        for n in ItemsRequest:
            price =  Item.objects.get(pk=n["id"]).price * n["qtd"]
            Total = Total + price

        Items = Item.objects.filter(pk__in=ItemsID)

        serializer.save(Items=Items, total=Total)