from django.contrib.auth.models import User, Group, UserManager
from rest_framework import serializers
from .models import Pact

class UserSerializer(serializers.ModelSerializer):
    pacts = serializers.PrimaryKeyRelatedField(many=True, queryset=Pact.objects.all())
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'pacts', 'first_name', 'last_name')
        # should not be exposing password but yolo

    def create(self, validated_data):
        validated_data.pop('pacts')
        return User.objects.create_user(**validated_data)


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('name')


class PactSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Pact
        fields = ('id', 'created', 'name', 'desc', 'freq', 'owner', 'participants')