import random
from django.shortcuts import render
from rest_framework import viewsets
from .models import Quote
from .serializers import QuoteSerializer
from django.http import HttpResponse, JsonResponse

# DRF viewset for full CRUD access
class QuoteViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer

# basic home view
def home(request):
    return HttpResponse("Welcome to the Daily Quotes API!")

# NEW: API view for random quote
def get_random_quote(request):
    quotes = Quote.objects.all()
    if quotes:
        quote = random.choice(quotes)
        return JsonResponse({
            "id": quote.id,
            "text": quote.text,
            "author": quote.author
        })
    else:
        return JsonResponse({"error": "No quotes found"}, status=404)
