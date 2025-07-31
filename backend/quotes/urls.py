from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuoteViewSet, get_random_quote

router = DefaultRouter()
router.register(r'quotes', QuoteViewSet)

urlpatterns = [
    path('random/', get_random_quote, name='random-quote'),
]

urlpatterns += router.urls
