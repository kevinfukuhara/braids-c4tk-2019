from django.contrib.auth.models import User, Group
from django.http import HttpResponse
from django.template import loader
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class HomeView(request):
    """
    Renders home view.
    """
    template = loader.get_template('../../index.html') # load from root?
    context = {}
    return HttpResponse(template.render(context, request))