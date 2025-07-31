from django.db import models

class Quote(models.Model):
    text = models.TextField()
    author = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f'"{self.text}" - {self.author or "Anonymous"}'
