import random
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Quote
from .serializers import QuoteSerializer

# viewset for CRUD on /api/quotes/
class QuoteViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer

# simple homepage response
def home(request):
    return HttpResponse("Welcome to the Daily Quotes API!")

# DRF API view to return one random quote
@api_view(['GET'])
def get_random_quote(request):
    quotes = Quote.objects.all()
    if quotes.exists():
        quote = random.choice(quotes)
        return Response({
            "id": quote.id,
            "text": quote.text,
            "author": quote.author
        })
    else:
        return Response({"error": "No quotes found"}, status=404)
