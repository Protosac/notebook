# Django URLS.PY
#
# URL pattern = the form of the url (/web/1/edit)
# URLconfs = maps URL patterns to views
# These are basically similar to routes in Rails
urlpatterns = [
    url(r'^polls/', include('polls.urls', namespace="polls")),
    url(r'^admin/', include(admin.site.urls)),
]

# url() is passed 4 arguments: regex, view, kwargs (optional) and name (optional)
# /^\w+/g = matches first word of a string
# /\w+$/g = matches last word of a string or line

# Django VIEWS.PY
# These act more like controllers 
# Methods represent the corresponding pages
from django.shortcuts import render
from .models import User

def index(request):
  myObject = MyModel.objects.all()
  context = RequestContext(request, {'My Stuff': myObject,})

  myData = MyData.objects.get()

  return HttpResponse(template.render(context))
  # Or a shortcut to the same thing ...
  return render(request, 'myapp/index.html', context)

# Django TEMPLATES
# These are the actual views. Below, a namespaced link:
#     <a href="{% url 'polls:detail' question.id %}"></a>

# TEAM TRAINING
# Django Learning Projects:
# 1. Create form