import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

const baseUrl = '/api/projects';

@inject(HttpClient)
export class DataContext {
  constructor(httpClient) {
    this.http = httpClient;
  }

  // TODO Wrap API calls in promises to catch errors

  getAll() {
    return this.http.fetch(baseUrl, {
      method: 'GET',
    })
      .then(response => response.json());
  }

  findPopular() {
    return this.http.fetch(`${baseUrl}/findPopular`, {
      method: 'GET',
    })
      .then(response => response.json());
  }

  findEnterpriseInsight() {
    return this.http.fetch('/api/codes/findEnterpriseInsight', {
      method: 'GET',
    })
      .then(response => response.json());
  }

  getLastProcessedDateTime() {
    return this.http.fetch('/api/codes/getLastProcessedDateTime', {
      method: 'GET',
    })
      .then(response => {
        if (response && response.ok) {
          return response.json();
        }
        return null;
      });
  }

  search(searchText) {
    return this.http.fetch(`${baseUrl}/search`, {
      method: 'POST',
      body: json(searchText),
    })
      .then(response => response.json());
  }

  findSuggestions(searchText) {
    return this.http.fetch(`${baseUrl}/findSuggestions`, {
      method: 'POST',
      body: json(searchText),
    })
      .then(response => {
        if (response && response.ok) {
          return response.json();
        }
        return null;
      });
  }

  findById(id) {
    const adjustedURL = `${baseUrl}/findById/${id}`;
    return this.http.fetch(adjustedURL)
      .then(response => {
        if (response && response.ok) {
          return response.json();
        }
        return null;
      });
  }

  findSimilarProjects(id) {
    const adjustedURL = `${baseUrl}/findSimilarProjects/${id}`;
    return this.http.fetch(adjustedURL, {
      method: 'GET',
    })
      .then(response => {
        if (response && response.ok) {
          return response.json();
        }
        return null;
      });
  }

  getHealthById(id) {
    const adjustedURL = `${baseUrl}/findSonarHealthMetrics/${id}`;
    return this.http.fetch(adjustedURL, {
      method: 'GET',
    })
      .then(response => response.json());
  }

  getComponentDependencies(id) {
    const adjustedURL = `${baseUrl}/findComponentDependencies/${id}`;
    return this.http.fetch(adjustedURL, {
      method: 'GET',
    })
      .then(response => response.json());
  }

  postUsedProject(postObject, id) {
    return this.http.fetch(`${baseUrl}/addForkedProjects/${id}`, {
      method: 'POST',
      body: json(postObject),
    })
      .then(response => response.json());
  }

  findHealthiest() {
    return this.http.fetch('/api/codes/findHealthiest', {
      method: 'GET',
    })
      .then((response) => {
        if (response && response.ok) {
          return response.json();
        }
        return null;
      });
  }

}
