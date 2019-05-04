from django.db import models

# Create your models here.

class Pact(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50)
    desc = models.TextField()
    freq = models.CharField(max_length=20)
    owner = models.ForeignKey('auth.User', related_name='pacts', on_delete=models.CASCADE)
    participants = models.TextField(blank=True)

    class Meta:
        ordering = ('created',)
