import webapp2

class Mainpage(Webapp2.ReqestHandler):
    def get(self):
        self.response.write("Helllo World")

app=webapp2.WSGIApplication([('/'),MainPage],debug=True)