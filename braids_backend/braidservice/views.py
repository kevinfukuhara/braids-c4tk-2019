from .serializers import UserSerializer, GroupSerializer

from .models import Pact
from .serializers import PactSerializer
from rest_framework import generics, permissions

from django.contrib.auth.models import User, Group
from rest_framework.response import Response

import logging

logger = logging.getLogger(__name__)

permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserByNameDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'

class PactList(generics.ListCreateAPIView):
    queryset = Pact.objects.all()
    serializer_class = PactSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class PactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pact.objects.all()
    serializer_class = PactSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class GroupList(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class GroupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer