from wikipedia import *
from pydantic import BaseModel
from fastapi import *

app = FastAPI()


class SearchBody(BaseModel):
    title: str


@app.get("/wiki/search_by_path/{title}")
def getByPath(title: str):
        return {"result": wikipedia.page(title).content}


@app.get("/wiki/search_by_query")
def getByQuery(title: str):
        return {"result": wikipedia.page(title).content}

@app.post("/wiki/search_by_body")
def postByBody(body: SearchBody):
        return {"result": wikipedia.page(body.title).content}
