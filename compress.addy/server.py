#!/usr/bin/env python
try:
    from http import server # Python 3
except ImportError:
    import SimpleHTTPServer as server # Python 2

class MyHTTPRequestHandler(server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Set the required headers for SharedArrayBuffer
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Cross-Origin-Embedder-Policy", "require-corp")
        server.SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    # Serve files from the current directory on port 8000
    PORT = 8000
    handler = MyHTTPRequestHandler
    httpd = server.HTTPServer(("", PORT), handler)
    print(f"Serving at port {PORT} with COOP/COEP headers enabled")
    httpd.serve_forever()
