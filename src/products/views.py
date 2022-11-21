from django.shortcuts import render

# Create your views here.


from rest_framework import permissions, renderers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Items
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    Additionally we also provide an extra `highlight` action.
    """
    queryset = Items.objects.all()
    serializer_class = ProductSerializer
  

    @action(detail=True, renderer_classes=[renderers.CoreAPIJSONOpenAPIRenderer])
    def highlight(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.highlighted)

    def perform_create(self, serializer):
        serializer.save()