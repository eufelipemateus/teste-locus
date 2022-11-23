from django.urls import include, re_path
from rest_framework.routers import DefaultRouter

from products import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'items', views.ProductViewSet)
router.register(r'sales', views.SaleViewSet)

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
urlpatterns = [
    re_path(r'^', include(router.urls))
]